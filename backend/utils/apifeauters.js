class APIfeauters{
    constructor(query  , querystr){
        this.query = query,
        this.querystr = querystr
    }
    search(){
   let saavi =  this.querystr.keyword ? {
            name : {
                $regex : this.querystr.keyword,
                $options : 'i'
            }
        } : {};

        this.query.find({...saavi})
       return this;
    }
    filter(){
        const copyquerystr = ({...this.querystr})

        const removingfield = ['keyword','limit','page']
        removingfield.forEach(field => delete copyquerystr[field])

        let querystr = JSON.stringify(copyquerystr)
       querystr= querystr.replace(/\b(lt|lte|gt|gte)/g, match => `$${match}`)


        this.query.find(JSON.parse(querystr));
        
        return this;
    }
    pageinate(Resperpage){
        const currentpage = Number(this.querystr.page) || 1;
        const skip =  Resperpage*currentpage-1
        this.query.limit(Resperpage).skip(skip)
        return this ;
        
       }
}

module.exports = APIfeauters;