import { readFileSync } from "fs"
import path from "path"

export const readFile = (srcPath: string) => {
    const relativePath = path.join(__dirname, srcPath.replace('@/', '../../'))
    try {
        return readFileSync(relativePath, 'utf8')
    } catch (err) {
        console.error(err)
        return ''
    }
}