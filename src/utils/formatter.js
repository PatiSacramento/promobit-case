

export const dateFormatter = (date) => {
    const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]

    const dateToFormat = new Date(date)

    const formattedDate = ((dateToFormat.getDate() + " " + months[(dateToFormat.getMonth())] + " " + dateToFormat.getFullYear()))

    return formattedDate

}


export const detailsDateFormatter = (date) => {

    function addZero(number){
        if (number <= 9) 
            return "0" + number;
        else
            return number; 
    }

    const dateToFormat = new Date(date)

    const formattedDate = (addZero(dateToFormat.getDate().toString()) + "/" + addZero(dateToFormat.getMonth().toString()) + "/" + dateToFormat.getFullYear())

    return formattedDate
}