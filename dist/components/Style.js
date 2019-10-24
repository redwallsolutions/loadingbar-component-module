import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    opacity: ", ";\n\tanimation-delay: 2s;\n\tanimation-duration: 0.3s;\n\tanimation-delay: 0.5s;\n\tanimation-fill-mode: both;\n\tanimation-name: ", ";\n\tposition: fixed;\n\ttop: 10px;\n\tright: 7px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\theight: 3px;\n\tbox-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\n\tbackground-color: ", ";\n\twidth: ", "%;\n\tanimation-delay: 2s;\n\tanimation-duration: 0.3s;\n\tanimation-delay: 0.5s;\n\tanimation-fill-mode: both;\n\tanimation-name: ", ";\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .loading-bar-component-module {\n        padding: 0;\n        margin: 0;\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        * {\n            transition: 0.4s ease-in-out;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Theming from '@redwallsolutions/theming-component-module';
export var theme = Theming.createThemeWithAppearance();
var defaultProps = {
  appearance: 'default'
};
export var Reset = createGlobalStyle(_templateObject());
var hideLoadingBar = keyframes(_templateObject2());
export var LoadingBarStyled = styled.div(_templateObject3(), function (props) {
  return theme(props).color;
}, function (props) {
  return props.progress;
}, function (props) {
  return props.progress >= 100 || props.progress <= -1 ? hideLoadingBar : 'redwall';
});
LoadingBarStyled.defaultProps = defaultProps;
export var SpinnerContainer = styled.div(_templateObject4(), function (props) {
  return props.progress >= 1 && props.progress <= 100 ? '1' : '0';
}, function (props) {
  return props.progress >= 100 || props.progress <= -1 ? hideLoadingBar : 'redwall';
});
SpinnerContainer.defaultProps = defaultProps;