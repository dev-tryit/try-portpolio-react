class ImageUtil {
    static random(width:number,height:number,seed?:string,type?:string,options:[]=[]):string{
        const mySeed = seed??`${Math.random()*32453425435}`;
        let url = `https://picsum.photos/seed/${mySeed}/${width}/${height}${type?`.${type}`:''}`;

        return this.addOptionToUrl(url,options);
    }

    static specificRandom(width:number,height:number,id:number,type?:string,options:[]=[]):string{
        let url = `https://picsum.photos/id/${id}/${width}/${height}${type?`.${type}`:''}`;
        return this.addOptionToUrl(url,options);
    }
    static specificInfo(id:number):string{
        let url = `https://picsum.photos/id/${id}/info`;
        return url;
    }

    /**options: 'grayscale' | 'blur' | 'blur=1' | 'blur=10'  | page=2 | limit=100 */
    private static addOptionToUrl(url:string,options:[]=[]):string{
        
        const optionStr = options.join("%");
        if(optionStr) {
            url+=`?${optionStr}`
        }
        return url;
    }
}

export default ImageUtil;