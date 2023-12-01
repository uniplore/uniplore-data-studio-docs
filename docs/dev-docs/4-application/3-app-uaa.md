---
title: 认证中心
sidebar_position: 3
---

## 简介

认证中心基于springboot、spring-security和oauth2实现，支持多种认证方式，包括：

- 用户名密码认证
- 短信验证码认证(暂未接入)
- 第三方认证(目前暂未实现)

## 用户名密码认证

用户名密码认证模式主要是对TokenEnhancer进行增强，认证服务配置文件为AuthServerConfig，通过TokenEnhancer对用户信息进行扩展，用户登录完成后主要返回信息格式如下：

```json
{
  "code": 200,
  "msg": "操作成功",
  "time": 1701154846493,
  "data": {
    "tenantId": "100000",
    "avatar": "https://oss.uniplore.cn/common/avatar.jpg",
    "userName": "admin",
    "type": 1,
    "userId": "5",
    "account": "admin",
    "email": "test@163.com",
    "jti": "43ddc18c-d479-468f-b177-3a3dc77d8b86",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImF2YXRhciI6Imh0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yMDg0MTE4MTI4LDI1MTg3MTEwMzQmZm09MjYmZ3A9MC5qcGciLCJ1c2VyTmFtZSI6ImFkbWluIiwidHlwZSI6MSwidXNlcklkIjoiMiIsImF1dGhvcml0aWVzIjpbIjEiXSwiY2xpZW50X2lkIjoidW5pcGxvcmUiLCJzY29wZSI6WyJhbGwiXSwidGVuYW50SWQiOjEwMDAwMCwiZXhwIjoxNzAxMTkwODQ2LCJqdGkiOiI0M2RkYzE4Yy1kNDc5LTQ2OGYtYjE3Ny0zYTNkYzc3ZDhiODYiLCJhY2NvdW50IjoiYWRtaW4iLCJlbWFpbCI6InRlc3RAMTYzLmNvbSJ9.2uXwzdngxx_XEOn_2E_SzhaiizPoeiPQ3UzOfipDNYI",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImF2YXRhciI6Imh0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yMDg0MTE4MTI4LDI1MTg3MTEwMzQmZm09MjYmZ3A9MC5qcGciLCJ1c2VyTmFtZSI6ImFkbWluIiwidHlwZSI6MSwidXNlcklkIjoiMiIsImF1dGhvcml0aWVzIjpbIjEiXSwiY2xpZW50X2lkIjoidW5pcGxvcmUiLCJzY29wZSI6WyJhbGwiXSwiYXRpIjoiNDNkZGMxOGMtZDQ3OS00NjhmLWIxNzctM2EzZGM3N2Q4Yjg2IiwidGVuYW50SWQiOjEwMDAwMCwiZXhwIjoxNzAxMTkwODQ2LCJqdGkiOiIzOWI5YjU0YS1iNTJkLTQ3NzMtYmJmNC0xMzRjOGYwODkwM2UiLCJhY2NvdW50IjoiYWRtaW4iLCJlbWFpbCI6InRlc3RAMTYzLmNvbSJ9.s4Hr9hvyEQ1vHL_tl8qIgvn2DztUPQMyAuSI2EQ1WSY",
    "tokenType": "bearer",
    "scope": [
      "all"
    ],
    "expiresIn": 35999
  }
}
```

其中最重要的是accessToken、refreshToken和expiresIn，scope主要负责用户访问作用域。


## 如何拓展登录模式？

### 对基本认证进行重新实现

开发者可以参考**uniplore-app-uaa**模块下的cn.uniplore.app.uaa.sms包，需要实现的有：

- `AbstractAuthenticationProcessingFilter`
- `AuthenticationProvider`
- `SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity>`
- `AbstractAuthenticationToken`

### 编写granter

这里开发者可以参考源码的cn.uniplore.app.uaa.granter.SmsCodeTokenGranter。

### 认证配置加入security中

这里开发者可以参考源码的cn.uniplore.app.uaa.config.SecurityConfig，主要是从重写WebSecurityConfigurerAdapter的configure方法，部分
实现代码如下：

```java
@Order(3)
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private IgnoreUrlPropsConfiguration ignoreUrlPropsConfig;
    @Resource
    private SmsCodeAuthenticationSecurityConfig smsCodeAuthenticationSecurityConfig;

    // 其他代码省略
    ......

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        ExpressionUrlAuthorizationConfigurer<HttpSecurity>.ExpressionInterceptUrlRegistry config
                = http.requestMatchers().anyRequest()
                .and()
                .formLogin()
                .and()
                .apply(smsCodeAuthenticationSecurityConfig) // 主要参考这里！！！！！！！！！！！
                .and()
                .authorizeRequests();
        ignoreUrlPropsConfig.getUrls().forEach(url -> {
            config.antMatchers(url).permitAll();
        });
        ignoreUrlPropsConfig.getIgnoreSecurity().forEach(url -> {
            config.antMatchers(url).permitAll();
        });
        config
                .anyRequest()
                .authenticated()
                .and()
                .csrf().disable();
    }

    // 其他代码省略
    ......
}

```

### 对TokenGranter进行拓展增强

这里开发者可以参考源码的cn.uniplore.app.uaa.config.AuthServerConfig，实现的部分代码如下：

```java

@Order(2)
@Configuration
@EnableAuthorizationServer
@RequiredArgsConstructor
public class AuthServerConfig extends AuthorizationServerConfigurerAdapter {

    // 其他代码省略
    ......

    /**
     * 重点
     * 先获取已经有的五种授权，然后添加我们自己的进去
     *
     * @param endpoints AuthorizationServerEndpointsConfigurer
     * @return TokenGranter
     */
    private TokenGranter tokenGranter(final AuthorizationServerEndpointsConfigurer endpoints, DefaultTokenServices tokenServices) {
        List<TokenGranter> granters = new ArrayList<>(Collections.singletonList(endpoints.getTokenGranter()));
        // 短信验证码模式
        granters.add(new SmsCodeTokenGranter(authenticationManager, tokenServices, endpoints.getClientDetailsService(),
                endpoints.getOAuth2RequestFactory(), redisService));
        // 验证码模式
        granters.add(new CaptchaTokenGranter(authenticationManager, tokenServices, endpoints.getClientDetailsService(),
                endpoints.getOAuth2RequestFactory(), redisService, catpchaCodeProperties));
        // 社交登录模式
        granters.add(new SocialTokenGranter(authenticationManager, tokenServices, endpoints.getClientDetailsService(),
                endpoints.getOAuth2RequestFactory(), redisService, factory));
        // 增加密码模式
        granters.add(new ResourceOwnerPasswordTokenGranter(authenticationManager, tokenServices, endpoints.getClientDetailsService(), endpoints.getOAuth2RequestFactory()));
        // refresh_token模式
        granters.add(new RefreshTokenGranter(tokenServices, endpoints.getClientDetailsService(), endpoints.getOAuth2RequestFactory()));
        return new CompositeTokenGranter(granters);
    }

    // 其他代码省略
    ......
}

```