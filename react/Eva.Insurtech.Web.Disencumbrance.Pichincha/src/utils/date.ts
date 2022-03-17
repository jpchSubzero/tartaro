/**
 * Age to BirthDate (with current Date)
 * @param age number age
 * @returns yyyy/mm/dd  birthDate
 */
 export function ageToBirthDate(age: number) {
    let birthDate = ""
    let currentDate = new Date();
    const months = 12 * age;
    currentDate.setMonth(currentDate.getMonth() - months);
    const day = currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate();
    const month = (currentDate.getMonth() + 1) < 10 ? "0" + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1;
    birthDate = currentDate.getFullYear()+ "/" + month + "/" + day ;
    return birthDate;
}

export function dayMonthYearToYearMonthDay(date:string){
    return date.split("/")
        .reverse()
        .join('/')
}

export function currentDateMinusAge(age:number){
    let currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - age);
    return new Date(currentDate)
}

