## task

Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.

## solution

go to https://www.websequencediagrams.com/ and replace the text with following lines

```
note over browser:
user create a new note
end note


browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

```
