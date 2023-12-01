---
title: 图数据存储
sidebar_position: 5
---

## 简介

为存储数据中台产生的数据血缘关系，将数据血缘关系存储在图数据库中，以方便数据血缘关系的查询和维护而封装uniplore-starter-age。
是否可以是neo4j存储？也是可以的，但是neo4j开源是单机数据库，如果想使用neo4j替换Apache Age，开发者需自行封装调用neo4j逻辑，
目前uniplore-data-studio暂时不提供切换到neo4j方案，且不支持集群，所以选择使用PostgreSQL + Apache Age存储。

- [Apache-Age官网](https://age.apache.org/#:~:text=Apache%20AGE%C2%AE%20is%20a%20PostgreSQL%20extension%20that%20provides,graph%20query%20modeling%20within%20the%20existing%20relational%20database.)
- [Apache-Age代码仓库](https://github.com/apache/age)
- [Apache-Age数据可视化管理工具](https://github.com/apache/age-viewer)

## 引入依赖

```kotlin
implementation("cn.uniplore:uniplore-starter-age:${latestVersion}")
```

## 调用示例

下面只给JAVA调用接口(Interface)定义，调用示例直接参考接口定义即可。

## 在springboot component中使用

```java

@Slf4j
@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class LineageDemoService {

    private final AgeService ageService;

    public void test() {
        Map<String, Object> props = new HashMap<>();
        props.put("id", String.valueOf(id));
        // 获取根节点
        List<NodeInfo> nodesInfo = ageService.getNodeByProperties(props);
    }
}
```

## 完整AgeService接口定义

```java
package cn.uniplore.core.age.service;

import cn.uniplore.core.age.enums.DirectionType;
import cn.uniplore.core.age.model.NodeInfo;
import cn.uniplore.core.age.model.RelationInfo;

import java.util.List;
import java.util.Map;

/**
 * age操作接口定义
 *
 * @author jy
 * @since 2023/6/21 17:54
 **/
public interface AgeService {
    /**
     * 通用型执行cypher语句
     *
     * @param cypher eg:
     *               MATCH (a:Person), (b:Person)
     *               WHERE a.name = 'Node A' AND b.name = 'Node B'
     *               CREATE (a)-[e:RELTYPE]->(b)
     *               RETURN e
     * @return {@link List< NodeInfo >} 执行结果
     */
    List<NodeInfo> executeCypher(String cypher);

    /**
     * 创建节点
     *
     * @param label 标签名称
     * @param props 属性值
     * @return {@link NodeInfo} 当前节点数据
     */
    NodeInfo createVertex(String label, Map<String, Object> props);

    /**
     * 创建节点并创建关联
     *
     * @param label          标签名称
     * @param props          属性值
     * @param relationNodeId 关联节点ID
     * @param direction      关联方向
     * @return {@link RelationInfo} 当前节点数据
     */
    RelationInfo createNodeAndRelation(String label, Map<String, Object> props, Long relationNodeId, DirectionType direction);

    /**
     * 创建关联关系
     *
     * @param label       标签名称
     * @param props       属性值
     * @param startNodeId 起始节点ID
     * @param endNodeId   结束节点ID
     * @param direction   关联方向
     * @return {@link RelationInfo} 当前节点数据
     */
    RelationInfo createRelation(String label, Map<String, Object> props, Long startNodeId, Long endNodeId, DirectionType direction);

    /**
     * 查询节点
     *
     * @param nodeId 节点ID
     * @return {@link NodeInfo} 节点信息
     */
    NodeInfo getNode(Long nodeId);

    /**
     * 根据属性查询节点
     *
     * @param param 查询信息
     * @return {@link NodeInfo} 节点信息
     */
    List<NodeInfo> getNodeByProperties(Map<String, Object> param);

    /**
     * 更新节点信息
     *
     * @param nodeId 节点ID
     * @param props  节点属性值
     * @return {@link NodeInfo} 节点信息
     */
    NodeInfo updateNode(Long nodeId, Map<String, Object> props);

    /**
     * 根据节点ID删除节点
     *
     * @param nodeId 节点ID
     * @return {@link NodeInfo} 被删除节点信息
     */
    NodeInfo deleteNode(Long nodeId);

    /**
     * 根据节点ID删除节点和关系
     *
     * @param nodeId 节点ID
     * @return {@link NodeInfo} 被删除节点信息
     */
    NodeInfo deleteNodeAndRelation(Long nodeId);

    /**
     * 查询上游节点数据
     *
     * @param nodeId 当前节点ID
     * @return {@link List<NodeInfo>} 上游节点信息
     */
    List<NodeInfo> getUpStream(Long nodeId);

    /**
     * 查询下游节点数据
     *
     * @param nodeId 当前节点ID
     * @return {@link List<NodeInfo>} 下游节点信息
     */
    List<NodeInfo> getDownStream(Long nodeId);
}
```
