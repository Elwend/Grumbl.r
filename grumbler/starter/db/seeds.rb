require 'buzzfeed_title_generator'

Grumble.destroy_all

names = %w(Andy Ansoo Brandon Christopher Clare Daniel Erica Jake Lisa Liz Mandy Martin Pam Paul Salvador Sam Stephen Wade)
title = %w(WOW OMG SUCH AMAZE MANY POSTING)

50.times do
  Grumble.create(author: names.sample, title: title.sample(2).join(' '), content: BuzzfeedTitleGenerator.make_title, avatar: "http://placekitten.com/#{rand(200..400)}/#{rand(200..400)}")
end
