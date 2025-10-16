import Theme, { Search, NotFoundLayout } from 'rspress/theme';

// 传入插槽
// const Layout = () => <Theme.Layout beforeNavTitle={<div>some content</div>} />;

// 定制 Home 页面
// const HomeLayout = () => <div>Home</div>;

// 定制 404 页面
const NewNotFoundLayout = () => (<div>
  <NotFoundLayout />
  <div>
    <script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>
    <script>alert('404 Not Found')</script>
  </div>
</div>);

export default {
  ...Theme,
  // Layout,
  // HomeLayout,
  NotFoundLayout: NewNotFoundLayout,
};

// 定制 Search 组件
// const MySearch = () => (
//   <div className="my-search">
//     <Search />
//   </div>
// );
// export { MySearch as Search };

// 重导出其他部分
export * from 'rspress/theme';