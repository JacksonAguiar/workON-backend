import { ICertification } from "../models/interfaces";
import CertificationService from "../services/CertificationService";
import TagController from "./TagController";

class CertificationController {
    static async create(request: any, response: any) {
        try {
            const skills: ICertification = request.body;
       
            const certificationService = new CertificationService();

            const certification = await certificationService.create(skills);
            return response.json(certification);
        } catch (err : any) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async delete(request: any, response: any) {
        try {
            const {id} = request.params;
           
            const certificationService = new CertificationService();

            console.log(`deleting ${id}...`);
            await certificationService.delete(id);

             return response.status(200).json({
                "success":
                {
                    "text": "successfully! deleted Record"
                }
            });
        } catch (err : any) {
            return response.status(400).json({ error: err.message });
        }
    }
    // static async createFromList(request: any, response: any){
    //     try {
    //         const tags:string =request.body["tags"];
    //         const tag :any[] = tags.split(",");
    //         const {pro_id} =request.body;
    //         const tagService = new TagService();

    //             tag.forEach(async element => {
    //                 element.pro_id = pro_id;
    //                 element.name = element;
    //                 console.log(element);
    //                 // await tagService.create({pro_id, name});
    //             });

    //         return response.status(200);
    //     } catch (err) {
    //         return response.status(400).json({error: err.message});
    //     }
    // }

}
export default CertificationController;