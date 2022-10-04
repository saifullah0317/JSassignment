function make_album(artistName1,albumTitle1,tracks=0)
{
    var album={artistName:artistName1,albumTitle:albumTitle1,numberOfTracks:tracks}
    return album
}
var albums=[make_album('Morrissey','The Queen Is Dead'),make_album('Nirvana','Never mind'),make_album('David Bowie','Low'),make_album('Shakira','Waka waka',4)]
for(var i=0;i<albums.length;i++)
{
    console.log(albums[i])
}
