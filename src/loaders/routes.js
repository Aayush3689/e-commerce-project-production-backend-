import sectionRoutes from '#modules/section/section.routes.js'

export const registerRoutes = (app) => {
    app.use('/api/section', sectionRoutes)
}