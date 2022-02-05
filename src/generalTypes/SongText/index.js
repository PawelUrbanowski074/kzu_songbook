import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSongById } from "../../features/SongBook/songsSlice";
import { Chords, LineOfChords, LineOfText, Text, TextVerse } from "./styled"

export const SongText = ({ id }) => {
  const song = useSelector(state => getSongById(state, id));

  return ( 
    <Text>
      <TextVerse>
        {song.text.split('%').map(verse => (
          <div key={nanoid()}>
            {verse.split('*').map(line => (
              <LineOfText key={nanoid()}>{line}</LineOfText>
            ))}
            <br />
          </div>
        ))}
      </TextVerse>

      <Chords>
        {song.chords.split('%').map(verse => (
          <div key={nanoid()}>
            {verse.split('*').map(line => (
              <LineOfChords key={nanoid()}>{line}</LineOfChords>
            ))}
            <br />
          </div>
        ))}
      </Chords>
    </Text>
  )
}