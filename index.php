<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testes</title>
    <script src="/blackjack/scripts/bj.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
    <div align="center">
        <div>
            <form id="dealer-form">
                <label for="dealer">Dealer</label>
                <input type="text" name="dealer" id="dealer">
                <button id="addDealer" type="submit">Adicionar</button>
            </form>
        </div>
        <div>
            <form>
                <label for="mao">Minha mao</label>
                <input type="text" name="mao" id="mao">
                <button type="submit">Adicionar</button>
            </form>
        </div>
        <div>
            
        </div>
    </div>

    <script>
        $("#dealer-form").submit(function(event) {
            event.preventDefault();
        });
        //.unbind('click').c
        $('#addDealer').click(function() {
            //alert("bob");
            addCartaDealer();
        });
    </script>
</body>

</html>