import {getRepository } from 'typeorm';
import Media from '../models/media';
import { IMedia } from '../models/interfaces';

class MediaService {
    public async create(newMedia: IMedia): Promise<Media> {
        const repository = getRepository(Media);
        const media = repository.create(newMedia);

        await repository.save(media);

        return media;
    }
}

export default MediaService;