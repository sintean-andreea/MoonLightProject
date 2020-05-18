$(document).ready(() => {
  let hash = window.location.hash;

  if (hash) {
    $(`.nav-anchor[href="${hash}"]`).tab("show");
  }

  $(".nav-anchor").click((event) => {
    const self = event.currentTarget;

    $(self).tab("show");
    window.location.hash = self.hash;

    if (window.location.hash) {
      $(`ul.nav-tabs-list a[href="${self.hash}"]`).tab("show");
    }
  });
});
