
module.exports = function(grunt) {

  grunt.initConfig({
  lessToSass: {
    convert: {
        files: [{
            expand: true,
            cwd: 'input/',
            src: ['*.less'],
            ext: '.scss',
            dest: 'output/'
        }]
    },
    excludes_replacements: {
        files: [{
            expand: true,
            cwd: 'input/',
            src: ['*.less'],
            ext: '.scss',
            dest: 'output/'
        }], 
        options:
        {
            excludes: ['default']
        }
    },
    convert_within_custom_replacements: {
        files: [{
            expand: true,
            cwd: 'input',
            src: ['default.less'],
            ext: '.scss',
            dest: 'output'
        }],
        options:
        {
            replacements: [{
                pattern: /(\s+)\.([\w\-]*)\s*\((.*)\);/gi,
                replacement: '$1@include $2($3)',
                order: 2
            }]
        }
    }
}
  });

  grunt.loadNpmTasks('grunt-less-to-sass');
};

