/**
 * Created by HUCC on 2017/7/31.
 */
function animate(element, target, num) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var leader = element.offsetLeft;
    var step = target > leader ? num : -num;

    //如果距离超过了一步，就可以跑，否则清除定时器，需要手动设置
    if (Math.abs(leader - target) >= Math.abs(step)) {
      leader += step;
      element.style.left = leader + "px";
    } else {
      clearInterval(element.timer);
      element.style.left = target + "px";
    }
  }, 15);
}
