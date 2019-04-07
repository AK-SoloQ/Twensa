import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Errors from "./views/Errors";
import Accueil from "./views/Accueil";
import BlogPosts from "./views/BlueBlogPosts";
import BlogPostsRed from "./views/RedBlogPosts";
import BlogPostsYellow from "./views/YellowBlogPosts";

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
    component: Accueil 
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
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
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
  },,
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
