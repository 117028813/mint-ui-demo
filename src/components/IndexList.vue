<template>
  <div class="index-list">
    <mt-index-list>
      <mt-index-section v-for="(item, index) in alphabet" :key="index" :index="item.initial">
        <mt-cell v-for="cell in item.cells" :key="cell" :title="cell"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane']

export default {
  data() {
    return {
      alphabet: []
    }
  },
  created() {
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
      let cells = NAMES.filter(name => name[0] === initial)
      this.alphabet.push({
        initial,
        cells
      })
    })
  }
}
</script>
