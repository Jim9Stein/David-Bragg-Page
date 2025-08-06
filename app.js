async function firstSixIncomplete(userId) {
        const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

        const result = await promise.json()

        const incompleteTasks = result.filter(element => !element.completed).slice(0, 6)


        console.log(incompleteTasks)
}


firstSixIncomplete(6)
  