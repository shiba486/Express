class Errorhandler {
    constructor(status,msg){
        this.status = status;
        this.message = msg;
    }

    static validationError(message="All Fields are Required"){
        return new Errorhandler(422,message)
    }
    static notFoundError(message="Not found!!"){
        return new Errorhandler(404, message)
    }
    static forbidden(message="Not allowed!!"){
        return new Errorhandler(403, message)
    }
}

module.exports = Errorhandler;