import { IMedia } from "../models/interfaces";
import MediaService from "../services/MediaService";

class MediaController {
    static async create(request: any, response: any) {
        try {
            const body: IMedia = request.body;
            const mediaService = new MediaService();
            const media = await mediaService.create(body);
            return response.json(media);
        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }
    }

}
export default MediaController;