x = document.getElementsByTagName("input");
for (a in x) {
  if (x[a].getAttribute)
    if (x[a].getAttribute("ng-model") == "$ctrl.isVideoOrganization") {
      x[a].click();
    }
}
// then
document
  .getElementsByClassName(
    "stream-btn btn-primary dialog-confirm-button ng-binding ng-scope"
  )
  .forEach((e) => e.click());
