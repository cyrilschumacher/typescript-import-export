module.exports = function (grunt) {
    grunt.initConfig({
        connect: {
            dev: {
                options: {
                    base: 'dist/',
                    hostname: 'localhost',
                    keepalive: true,
                    port: 5874
                }
            }
        },
        copy: {
            debug: {
                files: [
                    {
                        cwd: 'bower_components/',
                        expand: true,
                        src: ['requirejs/*.js'],
                        dest: 'dist/scripts/vendors/'
                    },
                    {
                        cwd: 'src/',
                        expand: true,
                        src: ['*.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        ts: {
            debug: {
                src: ['src/typescript/**/*.ts'],
                outDir: 'dist/scripts/',
                options: {
                    declaration: false,
                    target: 'es5',
                    removeComments: false,
                    sourceMap: false
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ts');
    grunt.registerTask('default', ['ts', 'copy']);
};