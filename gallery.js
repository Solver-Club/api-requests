import { getConditions as t } from './_util';
const fragments = {};


fragments.gallery = `{
    id,
    items(limit: 100) {
        id,
        hash,
        url,
        type
    }
}`;


/**
 * Получить галлерею
 * 
 * @param {Object} params
 * @returns {String}
 */
export function get(params) {   
    return `
        {gallery ${ t(params) } { 
            ${ fragments.gallery }
        }
    }`;
}

/**
 * Создать галлерею
 * 
 * @param {Object} params
 * @returns {String}
 */
export function create(params) {   
    return `
        mutation {createGallery ${ t(params) } 
            ${ fragments.gallery }
        }`;
}

/**
 * Обновить галлерею
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function update(params) {
    return `
        mutation {updateGallery ${ t(params) } 
            ${ fragments.gallery }
        }`;
}

/**
 * Добавить элемент в галерею
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function addMedia(params) {
    return `
        mutation {addMediaToGallery ${ t(params) } 
            ${ fragments.gallery }
        }`;
}

/**
 * Удалить элемент из галереи
 * 
 * @param {Object} params
 * @returns {String} 
 */
export function removeMedia(params) {
    return `
        mutation {removeMediaFromGallery ${ t(params) } 
            ${ fragments.gallery }
        }`;
}
