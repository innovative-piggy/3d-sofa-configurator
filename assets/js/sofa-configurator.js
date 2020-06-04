var SofaConfigurator = function (item) {
    var lstElement = [];
    var movingGroup = [];

    var undoManager = new UndoManager();
    var fullItemList = item.components;
    var lstCubeCameras = [];

    var currentMapTexture = null;
    var currentBumpTexture = null;
    var currentPrimaryColor = null;
    var currentSecondaryColor = null;
    ////////////////////////////////////////////
    //Initialize DOM
    ////////////////////////////////////////////
    $('#category-list').hide();
    $('#sofa-config-panel').show();
    $('#canvasSofa').children().remove();
    $('#select-type').children().remove();

    //display all sofa components
    if (item.components) {
        $('#select-type').children().remove();
        $('#select-type').append("<h2 style='margin : 0'>Categories</h2>");
        item.components.map((component, i) => {
            $('#select-type').append(
                "<div class='single-component' cat='" + component.data + "'>" +
                "<img src='models/" + component.thumbImage + "' width='200px'>" +
                "<p>" + component.name + "</p>" +
                "</div>"
            )
        })

        $('#additional-items').children().remove();
        $('#additional-items').append("<h2 style='margin : 0'>Additional Items</h2>");
        item.components.map((component, i) => {
            $('#additional-items').append(
                "<div class='additional-component hidden' cat='" + component.data + "'>" +
                "<img src='models/" + component.thumbImage + "' width='200px'>" +
                "<p>" + component.name + "</p>" +
                "</div>"
            )
        })
    }

}