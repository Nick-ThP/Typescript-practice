import React, {FC, useState} from 'react'

export enum HairColor {
  Blonde = "Your hair is blonde, good for you",
  Brown = "Cool hair color, man",
  Pink = "Stop. Go back."
}

type Props = {
    name: string;
    age: number;
    email: string;
    hairColor: HairColor;
    /* getName: (name: string) => string */
}

const Person: FC<Props> = ({name, age, email, hairColor}) => {

  const [country, setCountry] = useState<string | null>(null)

  type NameType = "Nicklas" | "Nickolas"
  const nameForType: NameType = "Nicklas"

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value)
  };

  return (
    <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{age}</h1>
        <input placeholder="Write down your country..." onChange={handleChange}/>
        {country}
        {hairColor}
        {nameForType}
    </div>
  )
}

export default Person