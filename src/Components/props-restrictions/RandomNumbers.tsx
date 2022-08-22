type RandomNumType={
    value:number
}
type RandomNumProps = PositiveNumType | NegativeNumType | ZeroNumType

type PositiveNumType= RandomNumType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumType= RandomNumType &{
    isNegative: boolean
    isZero?: never
    isPositive?: never
}
type ZeroNumType= RandomNumType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}


export const RandomNumbers = ({value, isPositive, isNegative, isZero}: RandomNumProps) => {
  return(
      <div>
          {value} {isPositive && 'positive'} {isNegative && 'negative'} {''}
          {isZero && 'zero'}
      </div>
  )
}