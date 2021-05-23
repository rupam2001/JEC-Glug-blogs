export default function (slug) {
    const splited = slug.split("?")
    const mainSlug = splited[0]
    const type = splited[1]
    return { slug: mainSlug, type }
}