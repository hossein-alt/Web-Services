package jac.webservice.application.api;

import jac.webservice.application.model.Movies;
import jac.webservice.application.service.MoviesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MoviesController {
    @Autowired
    private MoviesService service;

    @GetMapping("/")
    public List<Movies> getAll() {
        return service.getAllMovies();
    }

    @GetMapping("/{moviesId}")
    public Movies getMoviesById(@PathVariable Long moviesId) {
        return service.getMoviesById(moviesId);
    }

    @PostMapping("/")
    public Long createMovies(@RequestBody Movies movies) {
        return service.saveMovies(movies);
    }

    @PutMapping("/find/{moviesId}")
    public void updateMovies(@PathVariable Long moviesId, @RequestBody Movies movies) {
        service.updateMovies(moviesId, movies);
    }

    @DeleteMapping("/find/{moviesId}")
    public void deleteMovies(@PathVariable Long moviesId) {
        service.deleteMovies(moviesId);
    }
}
