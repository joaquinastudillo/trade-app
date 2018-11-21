<template>
    <div>
        <nav class="navbar navbar-expand navbar-light bg-light">
            <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            <ul class="navbar-nav">
                <router-link to="/portfolio" class="nav-item" activeClass="active" tag="li">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link to="/stocks" class="nav-item" activeClass="active" tag="li">
                    <a class="nav-link">Stocks</a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'HeaderApp',
  components: {
    
  }
}
</script>