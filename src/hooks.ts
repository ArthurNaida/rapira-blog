import { computed } from "vue";

export const useCommentLabel = (commentsLength: number) => computed(() => {
    if (commentsLength % 10 === 1 && commentsLength % 100 !== 11) {
        return 'комментарий';
    }
    if (commentsLength % 10 > 1 && commentsLength % 10 < 5
    && !(commentsLength % 100 > 11 && commentsLength % 100 < 15)) {
        return 'комментария';
    }
    return 'комментариев';
})

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// export function bindSrc(path: string) {
//     return  process.env.NODE_ENV === "development" ? `/src${path}` : `/src${path}` 
// }