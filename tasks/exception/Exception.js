try {
    console.log(a)
    let a = 3
} catch {
    console.error ("let перед использованием нужно объявить")
}


try {
    let division = 1 / 0;
    
    if (division == Infinity || division == -Infinity) {
        throw new ReferenceError ("на ноль делить нельзя");
    }
    console.log (division)
 } catch (e) {
    console.error (e)
}
