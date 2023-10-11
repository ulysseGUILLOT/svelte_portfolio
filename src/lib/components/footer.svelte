<script>
    function handleMouseOver(event) {
        event.target.style.backgroundColor = '#ffffff';
        event.target.style.color = '#000000';
        event.target.style.transition = 'background-color 0.3s, color 0.3s';
    }

    function handleMouseOut(event) {
        event.target.style.backgroundColor = '#000000';
        event.target.style.color = '#ffffff';
    }
</script>

<div class="footer-logos">
    <i class="bi bi-linkedin" on:mouseover="{handleMouseOver}" on:mouseout="{handleMouseOut}"></i>
    <i class="bi bi-github" on:mouseover="{handleMouseOver}" on:mouseout="{handleMouseOut}"></i>
    <i class="bi bi-twitter-x" on:mouseover="{handleMouseOver}" on:mouseout="{handleMouseOut}"></i>

</div>

<style>
    .footer-logos {
        display: flex;
        justify-content: center;
        margin-top: 100px;
        margin-bottom: 20px;
    }

    .bi {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        border: 2px solid #000000;
        background-color: #000000;
        color: #ffffff;
        border-radius: 50%;
        padding: 8px;
        margin: 10px;
        width: 30px;
        height: 30px;
    }
</style>