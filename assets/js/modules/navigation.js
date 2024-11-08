export default class Navigation {
    constructor() {
        this.showSection(window.location.hash);
        $(window).on("hashchange", () => {
            this.showSection(window.location.hash);
        });
    }
    showSection(hash) {
        if (!hash) {
            hash = "#" + $("section")[0].id;
            window.location.hash = hash;
        }
        if ($(hash)[0]) {
            $("section").hide();
            $(hash).show();
        } else {
            $("section").hide();
            $("#notfound").show();
            $("#hash").text(hash);
        }
    }
}