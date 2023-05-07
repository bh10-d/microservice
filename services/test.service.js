module.exports = {

    name: "test",

    settings: {
        port: 3001,
    },

    actions: { // action phai them s vi co the co nhieu action
        welcome:{
            rest:{
                path: "/"
            },
            handler(){
                return `Welcome you come to my API`
            }
        },
        test:{
            rest: {
                method: "GET",
                path: "/test"
            },
            params:{
                name: "string"
            },
            async handler(ctx){
                const test = await ctx.call(`greeter.hello`);
                if(ctx.params.name == ""){
                    return test;
                }else{
                    return ctx.params.name;
                }
            }
        },
        clone: {
            async handler(ctx){
                const data = await ctx.call(`greeter.test`);
                return data;
            }
        }
    },

    events:{
    },
    methods:{}
}

//sau khi tao service su dung command load servies/{ten file service} de load service len