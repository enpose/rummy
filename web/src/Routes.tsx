// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import PostsLayout from 'src/layouts/PostsLayout' // redwood feature: src is an alias to ../src
import SiteLayout from 'src/layouts/SiteLayout'

import { useAuth } from './auth'
// redwood feature: automatically imports all pages from /web/src/pages

// note: the following import statements are not needed because of the above
// import AboutPage from './pages/AboutPage/AboutPage'
// import HomePage from './pages/HomePage/HomePage'
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
// import PostNewPostPage from './pages/PostNewPostPage/PostNewPostPage'
// import PostEditPostPage from './pages/PostEditPostPage/PostEditPostPage'
// import PostPostPage from './pages/PostPostPage/PostPostPage'
// import PostPostsPage from './pages/PostPostsPage/PostPostsPage'

// note: rw g page {label} automatically creates a labelPage in /pages and creates a <Route> in Routes.tsx with a site url of ./{label} and a name of {label}
const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home" roles="admin">
        <Set wrap={PostsLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Private>
      <Set wrap={SiteLayout}>
        {/* redwood feature: layouts must be wrapped around a set of routes, can behave like a <header> but layouts offer mre functionality */}
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
