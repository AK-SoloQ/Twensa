import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
/*import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";*/
import BlogOverview from "./views/BlogOverview";
import BlogPosts from "./views/BlogPosts";
import BlogPostsRed from "./views/BlogPostsRed";
import BlogPostsYellow from "./views/BlogPostsYellow";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/Accueil" />
  },
  {
    path: "/Accueil",
    layout: DefaultLayout,
    component: BlogOverview 
  },
  {
    path: "/blog-blue",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/blog-red",
    layout: DefaultLayout,
    component: BlogPostsRed
  },
  {
    path: "/blog-yellow",
    layout: DefaultLayout,
    component: BlogPostsYellow
  }/** 
  ,{
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  }
  */
];
