//Eric Barrera 2/19/2014 Conditionals Assignment
//This is my personal conditional code.
//This calculator will determin the price of of your grocerys with with a discount card or without and with sales tax 
var priceOfItems = [25, 12, 30, 15, 22, 26, 40];//please add the price of your items
var discountCard = .15;//please add the precent of your member ship card discount if you dont have one please put 0
var totalPre = priceOfItems[0] + priceOfItems[1] + priceOfItems[2] + priceOfItems[3] + priceOfItems[4] + priceOfItems[5] + priceOfItems[6];//formula to find out price before tax.
var discount;//discount total
var total;//total with tax and discount if aplicable.
if(discountCard >= .001){//to find out if dicount card is aplicable
	discount = totalPre * discountCard;//how to calculate the discount.
	total = (totalPre - discount)* 1.0825;//total with discount and tax
	console.log("Your total before tax and your discount card was $" + totalPre + " your total with your discounts and tax is $" + total + " you saved $" + discount + "!");//message if you have a discount applied 
}else{
	total = totalPre * 1.0825;//how to calculate if no discount card is applied 
	console.log("Your total before tax is $" + totalPre + " your total with tax is $" + total + "!");
}
