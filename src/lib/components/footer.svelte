<script>
    function handleMouseOver(event) {
        event.target.style.backgroundColor = '#ffffff';
        event.target.style.color = '#000000';
        event.target.style.transition = 'background-color 0.3s, color 0.3s';
    }

    function handleMouseOut(event) {
        event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        event.target.style.color = '#ffffff';
    }
</script>

<div class="footer-logos">
    <a class="footer-logo-link" href="https://www.linkedin.com/in/ulysse-guillot/" target="_blank">
        <i class="bi bi-linkedin" on:mouseover="{handleMouseOver}" on:mouseout="{handleMouseOut}"></i>
    </a>
    <a class="footer-logo-link" href="https://github.com/ulysseGUILLOT" target="_blank">
        <i class="bi bi-github" on:mouseover="{handleMouseOver}" on:mouseout="{handleMouseOut}"></i>
    </a>
    <a class="footer-logo-link" href="https://twitter.com/UlysseGuillot" target="_blank">
        <i class="bi bi-twitter-x" on:mouseover="{handleMouseOver}" on:mouseout="{handleMouseOut}"></i>
    </a>
</div>

<style>
    .footer-logos {
        position: absolute;
        bottom: 50px;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .footer-logo-link {
        text-decoration: none;
    }

    .bi {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        background-color: rgba(255, 255, 255, 0.3);
        color: #ffffff;
        border-radius: 50%;
        padding: 10px;
        margin: 10px;
        width: 30px;
        height: 30px;
    }
</style>