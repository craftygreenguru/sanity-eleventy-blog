export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e64ed7b969aed4555468d32',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-14agjztq',
                  apiId: '57aac417-1d84-479f-b3ae-f94edd56a9db'
                },
                {
                  buildHookId: '5e64ed7be4489e6940707a9b',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-be3k5g5j',
                  apiId: '5652f3ef-24de-473a-bc5c-05952063099e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/craftygreenguru/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-be3k5g5j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
