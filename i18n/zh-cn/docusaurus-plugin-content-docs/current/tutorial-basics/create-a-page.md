---
sidebar_position: 1
---

# 新建页面

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

```javascript title="src/utils/swap.js"
function swap(a, b) {
  a = a + b
  b = a - b
  b = a - b

  return {
    aVal: a,
    bVal: b
  }
}

console.log(swap(10, 50))
```

A new page is now available at `http://localhost:3000/my-react-page`.

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at `http://localhost:3000/my-markdown-page`.
