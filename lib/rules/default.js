'use strict';var _ExportMap = require('../ExportMap');var _ExportMap2 = _interopRequireDefault(_ExportMap);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      category: 'Static analysis',
      description: 'Ensure a default export is present, given a default import.',
      url: (0, _docsUrl2['default'])('default') },

    schema: [] },


  create: function () {function create(context) {

      function checkDefault(specifierType, node) {

        var defaultSpecifier = node.specifiers.find(
        function (specifier) {return specifier.type === specifierType;});


        if (!defaultSpecifier) {return;}
        var imports = _ExportMap2['default'].get(node.source.value, context);
        if (imports == null) {return;}

        if (imports.errors.length) {
          imports.reportErrors(context, node);
        } else if (imports.get('default') === undefined) {
          context.report({
            node: defaultSpecifier,
            message: 'No default export found in imported module "' + String(node.source.value) + '".' });

        }
      }

      return {
        ImportDeclaration: checkDefault.bind(null, 'ImportDefaultSpecifier'),
        ExportNamedDeclaration: checkDefault.bind(null, 'ExportDefaultSpecifier') };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9kZWZhdWx0LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwidHlwZSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwic2NoZW1hIiwiY3JlYXRlIiwiY29udGV4dCIsImNoZWNrRGVmYXVsdCIsInNwZWNpZmllclR5cGUiLCJub2RlIiwiZGVmYXVsdFNwZWNpZmllciIsInNwZWNpZmllcnMiLCJmaW5kIiwic3BlY2lmaWVyIiwiaW1wb3J0cyIsIkV4cG9ydHMiLCJnZXQiLCJzb3VyY2UiLCJ2YWx1ZSIsImVycm9ycyIsImxlbmd0aCIsInJlcG9ydEVycm9ycyIsInVuZGVmaW5lZCIsInJlcG9ydCIsIm1lc3NhZ2UiLCJJbXBvcnREZWNsYXJhdGlvbiIsImJpbmQiLCJFeHBvcnROYW1lZERlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiYUFBQSx5QztBQUNBLHFDOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxTQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsaUJBRE47QUFFSkMsbUJBQWEsNkRBRlQ7QUFHSkMsV0FBSywwQkFBUSxTQUFSLENBSEQsRUFGRjs7QUFPSkMsWUFBUSxFQVBKLEVBRFM7OztBQVdmQyxRQVhlLCtCQVdSQyxPQVhRLEVBV0M7O0FBRWQsZUFBU0MsWUFBVCxDQUFzQkMsYUFBdEIsRUFBcUNDLElBQXJDLEVBQTJDOztBQUV6QyxZQUFNQyxtQkFBbUJELEtBQUtFLFVBQUwsQ0FBZ0JDLElBQWhCO0FBQ3ZCLGtCQUFDQyxTQUFELFVBQWVBLFVBQVVkLElBQVYsS0FBbUJTLGFBQWxDLEVBRHVCLENBQXpCOzs7QUFJQSxZQUFJLENBQUNFLGdCQUFMLEVBQXVCLENBQUUsT0FBUztBQUNsQyxZQUFNSSxVQUFVQyx1QkFBUUMsR0FBUixDQUFZUCxLQUFLUSxNQUFMLENBQVlDLEtBQXhCLEVBQStCWixPQUEvQixDQUFoQjtBQUNBLFlBQUlRLFdBQVcsSUFBZixFQUFxQixDQUFFLE9BQVM7O0FBRWhDLFlBQUlBLFFBQVFLLE1BQVIsQ0FBZUMsTUFBbkIsRUFBMkI7QUFDekJOLGtCQUFRTyxZQUFSLENBQXFCZixPQUFyQixFQUE4QkcsSUFBOUI7QUFDRCxTQUZELE1BRU8sSUFBSUssUUFBUUUsR0FBUixDQUFZLFNBQVosTUFBMkJNLFNBQS9CLEVBQTBDO0FBQy9DaEIsa0JBQVFpQixNQUFSLENBQWU7QUFDYmQsa0JBQU1DLGdCQURPO0FBRWJjLDZFQUF3RGYsS0FBS1EsTUFBTCxDQUFZQyxLQUFwRSxRQUZhLEVBQWY7O0FBSUQ7QUFDRjs7QUFFRCxhQUFPO0FBQ0xPLDJCQUFtQmxCLGFBQWFtQixJQUFiLENBQWtCLElBQWxCLEVBQXdCLHdCQUF4QixDQURkO0FBRUxDLGdDQUF3QnBCLGFBQWFtQixJQUFiLENBQWtCLElBQWxCLEVBQXdCLHdCQUF4QixDQUZuQixFQUFQOztBQUlELEtBckNjLG1CQUFqQiIsImZpbGUiOiJkZWZhdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cG9ydHMgZnJvbSAnLi4vRXhwb3J0TWFwJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdwcm9ibGVtJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0YXRpYyBhbmFseXNpcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Vuc3VyZSBhIGRlZmF1bHQgZXhwb3J0IGlzIHByZXNlbnQsIGdpdmVuIGEgZGVmYXVsdCBpbXBvcnQuJyxcbiAgICAgIHVybDogZG9jc1VybCgnZGVmYXVsdCcpLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXSxcbiAgfSxcblxuICBjcmVhdGUoY29udGV4dCkge1xuXG4gICAgZnVuY3Rpb24gY2hlY2tEZWZhdWx0KHNwZWNpZmllclR5cGUsIG5vZGUpIHtcblxuICAgICAgY29uc3QgZGVmYXVsdFNwZWNpZmllciA9IG5vZGUuc3BlY2lmaWVycy5maW5kKFxuICAgICAgICAoc3BlY2lmaWVyKSA9PiBzcGVjaWZpZXIudHlwZSA9PT0gc3BlY2lmaWVyVHlwZSxcbiAgICAgICk7XG5cbiAgICAgIGlmICghZGVmYXVsdFNwZWNpZmllcikgeyByZXR1cm47IH1cbiAgICAgIGNvbnN0IGltcG9ydHMgPSBFeHBvcnRzLmdldChub2RlLnNvdXJjZS52YWx1ZSwgY29udGV4dCk7XG4gICAgICBpZiAoaW1wb3J0cyA9PSBudWxsKSB7IHJldHVybjsgfVxuXG4gICAgICBpZiAoaW1wb3J0cy5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGltcG9ydHMucmVwb3J0RXJyb3JzKGNvbnRleHQsIG5vZGUpO1xuICAgICAgfSBlbHNlIGlmIChpbXBvcnRzLmdldCgnZGVmYXVsdCcpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgIG5vZGU6IGRlZmF1bHRTcGVjaWZpZXIsXG4gICAgICAgICAgbWVzc2FnZTogYE5vIGRlZmF1bHQgZXhwb3J0IGZvdW5kIGluIGltcG9ydGVkIG1vZHVsZSBcIiR7bm9kZS5zb3VyY2UudmFsdWV9XCIuYCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIEltcG9ydERlY2xhcmF0aW9uOiBjaGVja0RlZmF1bHQuYmluZChudWxsLCAnSW1wb3J0RGVmYXVsdFNwZWNpZmllcicpLFxuICAgICAgRXhwb3J0TmFtZWREZWNsYXJhdGlvbjogY2hlY2tEZWZhdWx0LmJpbmQobnVsbCwgJ0V4cG9ydERlZmF1bHRTcGVjaWZpZXInKSxcbiAgICB9O1xuICB9LFxufTtcbiJdfQ==