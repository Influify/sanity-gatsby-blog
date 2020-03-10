export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e67973812bf1178acdd0c9b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tw74nyud',
                  apiId: '9e7fa904-6a1d-4103-84dd-9a3e8323340a'
                },
                {
                  buildHookId: '5e679739d04eda6158dda778',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p122koms',
                  apiId: '304b061b-2df2-4103-8b69-d20ad726b524'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Influify/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p122koms.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
