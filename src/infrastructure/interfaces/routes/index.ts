import { Router } from "express";
import { readdirSync} from "fs"


const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName:string) => {
    const file = fileName.split(".").shift()
    return file
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    console.log("... (1)", cleanFileName(fileName))
    const cleanName = cleanFileName(fileName)
    if (cleanName !== "index") {
        console.log("... (2)",cleanName)
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Cargando.... ruta /${cleanName}`)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

export { router }