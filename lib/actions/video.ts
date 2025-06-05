'use server';

import { headers } from "next/headers";
import { auth } from "../auth";
import { apiFetch, getEnv, withErrorHandling } from "../utils";
import { BUNNY } from "@/constants";

const VIDEO_STREAM_BASE_URL = BUNNY.STREAM_BASE_URL;
const THUMBNAIL_STORAGE_BASE_URL = BUNNY.STORAGE_BASE_URL;
const THUMBNAIL_CDN_URL= BUNNY.CDN_URL;
const BUNNY_LIBRARRY_ID= getEnv('BUNNY_lIBRARY_ID');
const ACCESS_KEYS = {
    streamAccessKey: getEnv('BUNNY_STREAM_ACCESS_KEY'),
    storageAccessKey:getEnv("BUNNY_STORAGE_ACCESS_KEY"),
}

//helper Functions
const getSessionUserId = async(): Promise<string> => {
    const session = await auth.api.getSession({headers:await headers()})
    if(!session) throw new Error('Unauthenticated');

    return session.user.id;
}

//Server Action:
export const getVideoUploadUrl = withErrorHandling(async() => {
    await getSessionUserId();

    const videoResonse = await apiFetch(`${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARRY_ID}/videos`, {
        method: 'POST',
        bunnyType:'stream',
        body: {
            title : 'Temporary Title',
            collectionId: ''
        }
    })

    const uploadUrl = `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARRY_ID}/video/${videoResonse.guid}`

    return{
        videoId: videoResonse.guid,
        uploadUrl,
        accessKey: ACCESS_KEYS.streamAccessKey
    }
})