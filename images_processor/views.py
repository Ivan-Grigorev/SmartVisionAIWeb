from django.shortcuts import render
from django.views.generic import TemplateView


class HomePage(TemplateView):
    template_name = 'homepage.html'


class AddMetadata(TemplateView):
    template_name = 'add_metadata.html'


class GenerateCSV(TemplateView):
    template_name = 'generate_csv.html'


class CaptionsGenerateCSV(TemplateView):
    template_name = 'captions_generate_csv.html'
