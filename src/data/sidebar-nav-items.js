export default function() {
  return [
    {
      title: "Accueil",
      to: "/Accueil",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Blue Blog",
      htmlBefore: '<i class="material-icons">fitness_center</i>',
      to: "/blog-blue",
    }, {
      title: "Red Blog",
      htmlBefore: '<i class="material-icons">business_center</i>',
      to: "/blog-red",
    }, {
      title: "Yellow Blog",
      htmlBefore: '<i class="material-icons">terrain</i>',
      to: "/blog-yellow",
    }/*,
    {
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }*/
  ];
}
