declare var require: any;

require.config({
    urlArgs: 'v=1.0',
    
    paths: { 
        app: 'app'
    }
});

require(['app']);