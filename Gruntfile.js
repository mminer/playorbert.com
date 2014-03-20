module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            options: {
                compress: true
            },
            dist: {
                src: ['src/less/<%= pkg.name %>.less'],
                dest: 'src/css/<%= pkg.name %>.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};
