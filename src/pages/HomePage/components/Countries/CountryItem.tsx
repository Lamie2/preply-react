interface ICountryItemProps {
  imageSrc: string
  language: string
  tutorCount: string
  marginLeft?: string;
}

export const CountryItem = (props: ICountryItemProps) => {
  const { imageSrc, language, tutorCount, marginLeft } = props
  return (
    <div className="country" style={ marginLeft ? { marginLeft: marginLeft } : {} }>
      <img src={imageSrc} alt="" />
      <div className="txt">
        <p>{language}</p>
        <small>{tutorCount}</small>
      </div>
    </div>
  )
}
